export type Children = {
  children: React.ReactNode;
};

export type InputProps = {
  label?: string;
  error?: boolean;
} & React.ComponentPropsWithRef<'input'>