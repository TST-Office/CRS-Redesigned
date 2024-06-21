import { Input } from "@/components/ui/Form/Form";

export default function Home() {
  return (
    <main>
      <Input placeHolder={"Enter Name"} label={true} labelValue="Name"  desc={true} descValue="pls provide name"  error={true} errorValue="Name too Short" type="text" />
    </main>
  );
}
