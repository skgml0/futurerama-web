export interface InfoData {
  synopsis: string;
  yearsAired: string;
  creators: [
    {
      name: string;
      url: string;
    },
    {
      name: string;
      url: string;
    }
  ];
  id: number;
}
