import { SearchBar } from "@/components/search-bar";
import { ComboboxType } from "@/components/combobox-type";

export default function WhereThingsHappen() {
  return (
    <section className="w-full flex flex-col items-center justify-between px-2 gap-2 md:px-4 md:flex-row">
      <ComboboxType />
      <SearchBar />
    </section>
  );
}
