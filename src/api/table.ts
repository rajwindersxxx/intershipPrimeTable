export type Pagination = {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
}
export type TableData = {
    id: number;
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: string;
    date_end: string;
  }
export interface DataType {
  pagination: Pagination;
  data: TableData[];
}

export async function getTableData({
  page = 1,
  limit = 8,
}: {
  page?: number;
  limit?: number;
}): Promise<DataType> {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&&limit=${limit}`
  );
  const data = res.json();
  return data;
}
