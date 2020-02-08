interface ItemOptions {
  label: string;
  value: string | number;
}

interface IHeaderList {
  value: string;
  handleValueChange: (value: string) => void;
  placeholder: string;
  options: [ItemOptions];
}

export default IHeaderList;
