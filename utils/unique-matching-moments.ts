import { MatchingMoment } from "@/types";

export const differenceBetweenMoments = (
  moment1: MatchingMoment,
  moment2: MatchingMoment
) => {
  return Math.abs(moment1.startVideoTime - moment2.startVideoTime);
};

const longerMoment = (moment1: MatchingMoment, moment2: MatchingMoment) =>
  moment1.startVideoTime < moment2.startVideoTime &&
  moment1.endVideoTime > moment2.endVideoTime
    ? moment1
    : moment2;

export const filterUniqueMatchingMoments = (
  matchingMoments: MatchingMoment[],
  threshold: number
) => {
  if (matchingMoments.length === 1) return matchingMoments;

  const uniqueMatchingMoments = [];

  let previousMoment = matchingMoments[0];

  for (let i = 1; i < matchingMoments.length; i++) {
    const currentMoment = matchingMoments[i];

    // Moments are similar
    if (differenceBetweenMoments(previousMoment, currentMoment) <= threshold) {
      previousMoment = longerMoment(previousMoment, currentMoment);

      // if the for loop has reached the end
      if (i === matchingMoments.length - 1) {
        uniqueMatchingMoments.push(previousMoment);
      }
    } else {
      // Moments are different
      uniqueMatchingMoments.push(previousMoment);

      previousMoment = currentMoment;
    }
  }

  return uniqueMatchingMoments;
};
