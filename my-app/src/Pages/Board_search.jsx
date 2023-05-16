import React, { useState } from "react";
import axios from "axios";

export const Board_search = (props) => {
    const [startperiod, setStart] = useState('');
    const [endperiod, setEnd] = useState('');
    const [vol_name, setVol_name] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            startperiod,
            endperiod,
            vol_name,
        };

        axios.post('/api/board_search', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status === 200) {
                console.log('검색에 성공했습니다!');
            } else {
                console.error('검색에 실패했습니다...');
            }
        })
        .catch(error => {
            console.error(error);
        });
    }

    return(
        <div className="auth-form-container">
            <h2>봉사 검색</h2>
            <form className="board_search-form" onSubmit={handleSubmit}>
                <label>봉사기간</label>
                <input value={startperiod} onChange={(e) => setStart(e.target.value)} type="date" id="startperiod" name="startperiod" />
                <label>~</label>
                <input value={endperiod} onChange={(e) => setEnd(e.target.value)} type="date" id="endperiod" name="endperiod" />
                <label>봉사명</label>
                <input value={vol_name} onChange={(e) => setVol_name(e.target.value)} name="vol_name" id="vol_name" placeholder="봉사활동명" />
                <button type="submit">검색</button>
            </form>
        </div>
    )
}

export default Board_search;