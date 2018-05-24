const KEY_TOKEN = "token";
const KEY_USER = "user";
import { AsyncStorage } from 'react-native';

export default class DataManager {

    static myInstance = null;

    _token = null;
    _user = null;

    static getInstance() {
        if (this.myInstance == null) {
            this.myInstance = new DataManager();
        }
        return this.myInstance;
    }


    async loadToken() {
        console.log('load token');
        try {
            this._token = await AsyncStorage.getItem(KEY_TOKEN);
            console.log('loaded token', this._token);
        } catch (error) {
            console.log(error);
            this._token = null;
        }
    }

    constructor() {
        console.log('constructor');
    }

    getToken() {
        return this._token;
    }


    async setToken(token) {
        console.log('set token', token);
        this._token = token;
        await AsyncStorage.setItem(KEY_TOKEN, token);
    }

    async loadUser() {
        try {
            this._user = JSON.parse(await AsyncStorage.getItem(KEY_USER));
        } catch (error) {
            this._user = null;
        }
    }

    getUser() {
        return this._user;
    }


    async setUser(user) {
        this._user = user;
        await AsyncStorage.setItem(KEY_USER, JSON.stringify(user));
    }

    async setCounter(counter) {
        this._user.counter = counter;
        await this.setUser(this._user)
    }
    async setCountChange(slectorCount){
        this._user.slectorCount = slectorCount;
        await this.setUser(this._user)
    }
    async addToFavorites(id){
        
        if(!this._user.favorites) {
            this._user.favorites = []
        }
        if(!this._user.favorites.find(i => i === id)){
             this._user.favorites.push(id)
        }
         await this.setUser(this._user)
    }
    async removeFromFavorites(id){
         if(!this._user.favorites) {
            this._user.favorites = []
        }
        this._user.favorites = this._user.favorites.filter(i => i !== id)
        await this.setUser(this._user)
    }
        isFavorite(id){
            if (!this._user.favorites){
                this._user.favorites = []
            }
            
            return this._user.favorites.find(i => i === id) != null
        }

    hasFavorites(){
        
        if(!this._user.favorites) {
             this._user.favorites = []
        }
        return   this._user.favorites.length > 0
    }
}