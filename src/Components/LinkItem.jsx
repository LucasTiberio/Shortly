import React, { useState } from 'react'
import styled from 'styled-components'

import Button from './Button'

const Link = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2% 4%;
    font-size: 1.3rem;

    overflow: hidden;
    
    background: white;
    span.link {
        color: ${props => props.theme.LightBlack};
    }
    a.shortened {
        color: ${props => props.theme.Cyan};
        margin-right: 1vw;
    }
`;

const LinkItem = ({data}) => {
    const [copied, setCopied] = useState(false);
    
    const handleClickCopy = url => {
        navigator.clipboard.writeText(data.url)
        if(copied === false) {
            setCopied(true);
            setTimeout(() => setCopied(false), 3*1000)
        }
    }

    return (
        <Link>
            <span className='linkCopy'> {data.url} </span>
            <div>
                <a href={"https://rel.ink/" + data.hashid} className="shortened">https://rel.ink/{data.hashid}</a>
                <Button copied={copied} onClick={handleClickCopy} light>Copy</Button>
            </div>
        </Link>
    )
}

export default LinkItem;