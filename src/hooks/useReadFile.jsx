import { useState,useEffect} from 'react';

function useReadFile(path){
    const [text, setText] = useState('...loading');

    useEffect(() => {
        async function fethFile(){
            const response = await fetch('../src/md/' + path);
            const text = await response.text();
            setText(text);
        }  
  
        fethFile();
      }, [])

    return text.toString();
}

export {useReadFile};