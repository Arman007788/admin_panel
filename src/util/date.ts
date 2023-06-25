export const convertDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month =
    date.getMonth() >= 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  return `${day}.${month}.${year}`;
};
