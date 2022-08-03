import React, {useEffect, useState} from 'react';
import ReactSelect from 'react-select'
import style from './style.module.css';

const Select = ({setTicket}) => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        fetchOptions()
            .then((resp) => setOptions(resp))
            .catch(e => console.warn(e));
    }, []);

    const fetchOptions = async () => {
        const request = await fetch('http://127.0.0.1:100/tickets');
        return await request.json();
    }

    return (
        <div>
            <div className={style.select_wrapper}>
                <ReactSelect theme={(theme) => ({
                    ...theme,
                    borderRadius: 20,
                    width: 200,
                })}
                options={options} onChange={(ticket) => setTicket(ticket.value)}/>
            </div>
        </div>
    );
};

export default Select;