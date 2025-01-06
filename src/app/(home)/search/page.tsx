import { SearchBar } from "@/components/(home)/pages/search/search-bar";
import { SearchBottomWrapper } from "@/components/(home)/pages/search/search-bottom-wrapper";
import { SearchFiltersSidebar } from "@/components/(home)/pages/search/search-filters-sidebar";
import { SearchHeader } from "@/components/(home)/pages/search/search-header";
import { SearchResults } from "@/components/(home)/pages/search/search-results";
import { SearchWrapper } from "@/components/(home)/pages/search/search-wrapper";

const SearchPage = () => (
  <SearchWrapper>
    <SearchHeader />
    <SearchBar />
    <SearchBottomWrapper>
      <SearchFiltersSidebar />
      <SearchResults />
    </SearchBottomWrapper>
  </SearchWrapper>
);

export default SearchPage;
