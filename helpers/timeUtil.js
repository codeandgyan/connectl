import moment from "moment-timezone";

export const getCurrentEpochTime = () => {
  const currentDate = new Date();
  const epochTime = moment(currentDate).valueOf();
  return epochTime;
};

export const convertEpochToRelativeTime = (epochTime) => {
  const currentTime = getCurrentEpochTime();
  const duration = moment.duration(currentTime - epochTime);

  if (duration.asMinutes() < 60) {
    return `${Math.round(duration.asMinutes())}m`;
  }
  if (duration.asHours() < 24) {
    return `${Math.round(duration.asHours())}h`;
  }
  return `${Math.round(duration.asDays())}d`;
};
