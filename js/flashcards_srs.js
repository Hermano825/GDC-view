// Simplified SM-2 implementation for flashcards.
// Ratings mapped from UI labels: Errei, Dificil, Bom, Facil.

(function () {
  const RATING_TO_QUALITY = {
    errei: 0,
    dificil: 3,
    bom: 4,
    facil: 5,
  };

  function clampEaseFactor(ef) {
    return Math.max(1.3, Number(ef.toFixed(2)));
  }

  function nextEaseFactor(currentEf, quality) {
    const q = quality;
    const delta = 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02);
    return clampEaseFactor(currentEf + delta);
  }

  function normalizeQuality(rating) {
    if (typeof rating === 'number') {
      if (rating < 0 || rating > 5) throw new Error('quality must be 0..5');
      return rating;
    }

    if (typeof rating !== 'string') {
      throw new Error('rating must be number or string');
    }

    const key = rating
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

    if (!(key in RATING_TO_QUALITY)) {
      throw new Error('rating string must be: Errei, Dificil, Bom, Facil');
    }

    return RATING_TO_QUALITY[key];
  }

  function createInitialReviewState(now) {
    const baseNow = now ? new Date(now) : new Date();
    return {
      dueAt: baseNow.toISOString(),
      lastReviewedAt: null,
      intervalDays: 0,
      repetitions: 0,
      easeFactor: 2.5,
      lapses: 0,
      totalReviews: 0,
      lastGrade: null,
    };
  }

  function calculateNextReview(state, rating, now) {
    const current = state || createInitialReviewState(now);
    const quality = normalizeQuality(rating);
    const reviewedAt = now ? new Date(now) : new Date();

    let repetitions = Number(current.repetitions || 0);
    let intervalDays = Number(current.intervalDays || 0);
    let easeFactor = Number(current.easeFactor || 2.5);
    let lapses = Number(current.lapses || 0);
    let totalReviews = Number(current.totalReviews || 0) + 1;

    easeFactor = nextEaseFactor(easeFactor, quality);

    if (quality < 3) {
      repetitions = 0;
      intervalDays = 1;
      lapses += 1;
    } else {
      repetitions += 1;
      if (repetitions === 1) {
        intervalDays = 1;
      } else if (repetitions === 2) {
        intervalDays = 3;
      } else {
        intervalDays = Math.max(1, Math.round(intervalDays * easeFactor));
      }

      if (quality === 5) {
        intervalDays = Math.round(intervalDays * 1.15);
      }

      if (quality === 3) {
        intervalDays = Math.max(1, Math.round(intervalDays * 0.8));
      }
    }

    const dueAt = new Date(reviewedAt);
    dueAt.setDate(dueAt.getDate() + intervalDays);

    return {
      dueAt: dueAt.toISOString(),
      lastReviewedAt: reviewedAt.toISOString(),
      intervalDays,
      repetitions,
      easeFactor,
      lapses,
      totalReviews,
      lastGrade: quality,
    };
  }

  window.FlashSRS = {
    createInitialReviewState,
    normalizeQuality,
    calculateNextReview,
  };
})();
