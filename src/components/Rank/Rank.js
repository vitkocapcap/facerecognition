import React from 'react';

const Rank = ({name, entries})=>{
    return(
        <div>
            <div className='white f3 '>
                {`Come on ${name}, your current entry is...`}
            </div>
            <div className='white f1 '>
                {entries}
            </div>
        </div>
    );
}

export default Rank;