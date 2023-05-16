import axios from "axios";
import React, { useState } from "react";

export const Board = (props) => {
    const [, ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {

        };

        axios.get('/api/board', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.status === 200){
                console.log('불러오기에에 성공했습니다!');
            } else {
                console.log('불러오기에 실패했습니다...');
            }
        })
        .catch(error => {
            console.error(error);
        })
    }

    return(
        <div className="auth-from-container">
            <h2>~봉사 게시판~</h2>
            /*봉사 게시글 모든 데이터를 가져오고 10개씩 페이징 하기*/
        </div>
    )
}

export default Board;