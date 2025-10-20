import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "../DisplayTable/DisplayTable.module.scss";
import type { SearchBoxProps } from "../../ts/layouts-types";

export function SearchBox<T extends { name: string }>({ value, results, onChange, onSelect, }: SearchBoxProps<T>) {
    return (
        <div className={style.input_wrapper}>
            <span>
                <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
                type="text"
                placeholder="Buscar"
                value={value}
                onChange={onChange}
                aria-expanded={results.length > 0}
            />
            {results.length > 0 && (
                <ul role="listbox" className={style.search_results}>
                    {results.map((r, i) => (
                        <li
                            key={i}
                            role="option"
                            onClick={() => onSelect(r)}
                            tabIndex={0}
                        >
                            {r.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}