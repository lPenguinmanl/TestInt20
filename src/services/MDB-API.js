import React from "react";

export default class MDBAPIService{
    _apiBase = ""
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}`+` , recieved ${res.status}`)
        }
        return await res.json();
    }
    
}