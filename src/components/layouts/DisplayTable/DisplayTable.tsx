import { useState, useEffect } from 'react';
import { faStaffSnake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router';
import type { DisplayTableProps, IDOCTORS, IPATIENTS } from '../../ts/layouts-types';
import { useDebounce } from '../../hooks/useDebounde';
import { SearchBox } from '../SearchBox/SearchBox';
import style from './DisplayTable.module.scss';

export const DisplayTable = <T extends IPATIENTS | IDOCTORS>({ data, isDoctor = false, children, dataFilter, setPerson }: DisplayTableProps<T>) => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState<T[]>([]);

    const debouncedSearch = useDebounce(search, 200);

    useEffect(() => {
        const query = debouncedSearch.trim().toLowerCase();
        if (!query) {
            setResult([]);
            return;
        }
        setResult(
            dataFilter.filter((p: T) => p.name.toLowerCase().includes(query))
        );
    }, [debouncedSearch, dataFilter]);

    const handleSelect = (item: T) => {
        setPerson?.(item);
        setResult([]);
        setSearch("");
    };

    // console.log(person)

    return (
        <>
            <div className={style.header_style}>
                <h5>{`${isDoctor ? 'Médicos' : 'Pacientes'}`}</h5>
                <div className={style.sub_header}>
                    <p>Selecciona o busca el nombre para ver más información</p>
                    <div className={style.search_bar_wrapper}>
                        <SearchBox
                            value={search}
                            results={result}
                            onChange={(e) => setSearch(e.target.value)}
                            onSelect={handleSelect}
                        />
                    </div>
                    <NavLink to="/" className={style.link}>
                        Ir a inicio
                    </NavLink>
                </div>
            </div>
            <div className={style.table_container}>
                <div className={`${style.container_flex} ${data ? style.container_display : ''}`}>
                    <div className={style.table_display}>{children}</div>
                    <div className={`${style.patient_card} ${data ? style.visible : ""}`}>
                        <div className={style.icon_background}>
                            <span><FontAwesomeIcon icon={faStaffSnake} /></span>
                        </div>
                        {data && (
                            <div className={style.pcontainer}>
                                <div className={style.patient_data}>
                                    <ul>
                                        {data.kind === "patient" ? (
                                            <>
                                                <li>
                                                    <h3>Paciente:</h3>
                                                    <p>{data.name}</p>
                                                </li>
                                                <li>
                                                    <h3>Estado:</h3>
                                                    <p>
                                                        <span
                                                            className={`${style.badge} ${style[data.status ?? "inactivo"]
                                                                }`}
                                                        >
                                                            {data.status ?? "inactivo"}
                                                        </span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <h3>Teléfono:</h3>
                                                    <p>{data.phone}</p>
                                                </li>
                                                <li>
                                                    <h3>Correo:</h3>
                                                    <p>{data.email}</p>
                                                </li>
                                                <li>
                                                    <h3>Motivo de consulta:</h3>
                                                    <p>{data.motivoConsulta}</p>
                                                </li>
                                                <li>
                                                    <h3>Diagnóstico:</h3>
                                                    <p>{data.diagnostico}</p>
                                                </li>
                                                <li>
                                                    <h3>Última visita:</h3>
                                                    <p>{data.ultimaVisita}</p>
                                                </li>
                                                <li>
                                                    <h3>Próxima cita:</h3>
                                                    <p>{data.proximaCita}</p>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li>
                                                    <h3>Médico:</h3>
                                                    <p>{data.name}</p>
                                                </li>
                                                <li>
                                                    <h3>Teléfono:</h3>
                                                    <p>{data.phone}</p>
                                                </li>
                                                <li>
                                                    <h3>Correo:</h3>
                                                    <p>{data.email}</p>
                                                </li>
                                                <li>
                                                    <h3>Especialidad:</h3>
                                                    <p>{(data as IDOCTORS).specialty}</p>
                                                </li>
                                            </>
                                        )}
                                        <li>
                                            <button className={style.close_btn} onClick={() => setPerson && setPerson(undefined)}>
                                                Cerrar
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
