const url = import.meta.env.SHEET_API;

type SheetData = [
  ["Kebutuhan", number],
  ["Total Donasi", number],
  ["Kekurangan", number],
  ["Terkumpul", number]
];

const fetcher = async () => {
  const response = await fetch(url);
  const data = (await response.json()) as SheetData;

  return data;
};

export default fetcher;
