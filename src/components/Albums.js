import React, { useEffect, useState } from 'react';
import { AlbumList } from '../datas/albums.js'
import Album from './Album.js'
function Albums() {
    return(
        <div>{
            AlbumList.map(({id,name,date,cover,description})=>(
              <div key = {id}>
                <Album artistName="tri yann" id={id} albumName={name} date={date} cover={cover} description={description}/>
              </div>
             ))
        }
        </div>
    )
}

export default Albums;