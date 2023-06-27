import _ from 'lodash';
import {VALID_CONTENT_TYPES, CONTENT_TYPE_HEADERS, REQUEST_METHODS} from "../constants";

export class Request {
    static DEFAULT_HEADERS = {
        'Content-Type': CONTENT_TYPE_HEADERS[VALID_CONTENT_TYPES.JSON]
    };

    #url;
    #headers;
    #body
    #requestMethod;

    constructor(url, defaultPath = '') {
        this.#url = new URL(defaultPath, url);
        this.#headers = new Headers;
        this.#body = {};
        this.#requestMethod = null;

        this.setHeaders(Request.DEFAULT_HEADERS);
    }

    setContentType(contentType) {
        if (!_.isEmpty(contentType) && _.isSet(CONTENT_TYPE_HEADERS[contentType])) {
            return this.setHeaders({'Content-Type': CONTENT_TYPE_HEADERS[contentType]});
        }

        return this;
    }

    getContentType() {
        return _.findKey(
            CONTENT_TYPE_HEADERS,
            val => val === this.getHeader('Content-Type')
        );
    }

    setRequestMethod(requestMethod){
        if(_.includes(Object.values(REQUEST_METHODS), requestMethod)){
            this.#requestMethod = requestMethod;
        }
    }

    setParams(params) {
        if(!_.isEmpty(params) && _.isObject(params)){
            _.forEach(params, (value, key) => {
               this.#url.searchParams.set(key, value);
            });
        }

        return this;
    }

    getParams(){
        return this.#url.searchParams;
    }

    setHeaders(headers){
        if(!_.isEmpty(headers) && _.isObject(headers)){
            _.forEach(headers, (value, key) => {
                this.#headers.set(key, value);
            })
        }

        return this;
    }

    getHeader(header){
        return this.#headers.get(header);
    }

    setBody(body){
        const contentType = this.getContentType();

        if(!_.isEmpty(body) || _.isObject(body)){
            if(contentType === VALID_CONTENT_TYPES.JSON){
                this.#body = JSON.stringify(body);
            }

            if(contentType === VALID_CONTENT_TYPES.FORM){
                this.#body = new FormData(body);
            }
        }

        return this;
    }


    async get() {
        this.setRequestMethod(REQUEST_METHODS.GET);
        return await this.#fetch();
    }

    async post(body) {
        this.setRequestMethod(REQUEST_METHODS.POST);
        this.setBody(body);

        return await this.#fetch();
    }

    async #fetch(parameter, method, headers, body) {
        try {
            const response = await fetch(this.#url, this.#getPayload());

            if (response.ok) return JSON.parse(await response.text());
        } catch (error) {
            console.log(error);
        }
    }

    #getPayload(){
        const payload = {
            method: this.#requestMethod
        };

        if (this.#requestMethod !== REQUEST_METHODS.GET){
            payload.headers = this.#headers;
            payload.body = this.#body;
        }

        return payload;
    }
}