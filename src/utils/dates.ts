interface FromNow {
  fromDate: Date;
}

export const fromNow = ({ fromDate }: FromNow) => {
  const nowDate = new Date();

  const from = fromDate.getTime();
  const now = nowDate.getTime();

  const inDays = Math.floor((now - from) / (24 * 3600 * 1000));
  const inWeeks = (now - from) / (24 * 3600 * 1000 * 7);

  const inMonths = getMonthDiff({ fromDate });

  const inYears = nowDate.getFullYear() - fromDate.getFullYear();

  let humanized = '';
  if (inDays <= 31) {
    humanized = `${inDays} days ago`;
  } else if (inWeeks <= 4) {
    humanized = `${inWeeks} weeks ago`;
  } else if (inMonths <= 12) {
    humanized = `${inMonths} months ago`;
  } else {
    humanized = `${inYears} years ago`;
  }

  return {
    inDays,
    inWeeks,
    inMonths,
    inYears,
    humanized,
  };
};

const getMonthDiff = ({ fromDate }: FromNow) => {
  const nowDate = new Date();

  const fromYear = fromDate.getFullYear();
  const fromMonth = fromDate.getMonth();
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();

  return nowMonth + 12 * nowYear - (fromMonth + 12 * fromYear);
};
