import {readdirSync} from 'fs';
import path from 'path';

export default function images(){
   try {

        const files = readdirSync( path.join('public/pictures/posts',this.id) );
        
        return files.filter( file => {
            return file.split(".").reverse()[0] === 'jpg';
        } )
               
   } catch(e) {
       return []
   }
}