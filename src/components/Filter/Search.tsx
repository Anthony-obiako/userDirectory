import { Search } from 'lucide-react'
import { Input } from '@headlessui/react'
import { ChangeEvent, KeyboardEvent } from 'react'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
  searchAction: () => void;
}

export function SearchBar({ searchQuery, setSearchQuery, onKeyDown, searchAction }: SearchBarProps) {

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    searchAction()
  }

  return (
    <div className="relative flex-1">
        <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" 
            role='button'
            aria-label='search button'
            onClick={searchAction}
        />
        <Input
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={changeHandler}
            onKeyDown={onKeyDown}
            className="pl-10 pr-4 py-2 w-full text-sm text-gray-900 bg-gray-50 outline-none rounded-lg border border-gray-300 focus:ring-primary-400 focus:border-primary-400"
        />
    </div>
  )
}