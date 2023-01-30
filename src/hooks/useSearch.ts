import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { useDebounce } from './useDebounce';
import { useFindBySearchQueryQuery } from '../store/api/api';
import { IUserQuery } from '../types/user';

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<IUserQuery[]>([]);

    const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500);

    const { data, ...rest } = useFindBySearchQueryQuery(
        debouncedSearchTerm,
        {
            skip: !debouncedSearchTerm,
        }
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        data && setSearchResults(data);
    }, [data]);

    return { setSearchTerm, searchTerm, searchResults, handleChange };
}