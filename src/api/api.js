/*
    Interface with EdenChain Explorer Server
*/
import {axInstance} from './ajax';
import uuid from 'uuid/v4';


// Common Define
const JSON_RPC_VERSION = "2.0";
const JSON_RPC_API_URL = "";

// JSON RPC method defines
const GET_BLOCK_HEIGHT = "block.getheight";
const GET_TOTAL_TRANSACTIONS_COUNT = "transaction.totalcount";
const GET_LATEST_TPS = "transaction.tps";
const GET_BLOCK_LAST_COMMIT_TIME = "block.latest_commit_time";
const GET_HIGHEST_TPS = "transaction.highest_tps";
const GET_TIME_SERIES_TRANSACTIONS = "transaction.count_by_time_series"
const GET_TIME_SERIES_BLOCKS = "block.count_by_time_series";
const GET_BLOCK_INFORMATION = "block.information";
const GET_TRANSACTION_INFORMATION = "transaction.information";
const SEARCH_KEYWORD = "search.keyword";
const GET_BLOCK_LIST = "block.list";
const GET_TRANSACTION_LIST = "transaction.list";


/*
    Define Each API
*/
class EExplorerApis{

    // Utilities
    getDefaultJson(method)
    {
        var jr = {};
        jr.id = uuid();
        jr.jsonrpc = JSON_RPC_VERSION;
        jr.method = method;
        jr.params = {};

        return jr;
    }

    isValidResponse(req,resp)
    {
        if(resp.isSuccess &&  req.id == resp.data.id && resp.data.result.err_code==0)
            return true;
        else
            return false;
    }

    // APIs
    async getBlockHeight(){
        let jr = this.getDefaultJson(GET_BLOCK_HEIGHT)

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {
            return resp.data.result.data.height;
        }
        else
            return undefined;
    }
    
    async getTotalTransactionCount(){

        let jr = this.getDefaultJson(GET_TOTAL_TRANSACTIONS_COUNT);

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {
            return resp.data.result.data.total_count;
        }
        else
            return undefined;
    }

    async getLatestTransactionPerSecond(){

        let jr = this.getDefaultJson(GET_LATEST_TPS);

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {
            return resp.data.result.data.tps;
        }
        else
            return undefined;
    }

    async getLatestBlockCommitTime(){
        
        let jr = this.getDefaultJson(GET_BLOCK_LAST_COMMIT_TIME);

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {
            return new Date(resp.data.result.data.time*1000);
        }
        else
            return undefined;
    }

    async getTimeSeriesBlocks(type){
        
        let jr = this.getDefaultJson(GET_TIME_SERIES_BLOCKS);
        jr.params.time_series_type = type

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {
            if (type=="hour")
                return resp.data.result.data.hour_series;
            else
                return resp.data.result.data.day_series;
        }
        else
            return undefined;
    }

    async getTimeSeriesTransactions(type){
        
        let jr = this.getDefaultJson(GET_TIME_SERIES_TRANSACTIONS);
        jr.params.time_series_type = type

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {
            if (type=="hour")
                return resp.data.result.data.hour_series;
            else
                return resp.data.result.data.day_series;
        }
        else
            return undefined;
    }

    async getTransactionList(page, count_per_page){
        
        let jr = this.getDefaultJson(GET_TRANSACTION_LIST);
        jr.params.page = page
        jr.params.count_per_page = count_per_page

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {           
            return resp.data.result.data;
        }
        else
            return undefined;
    }

    async getBlockList(page, count_per_page){
        
        let jr = this.getDefaultJson(GET_BLOCK_LIST);
        jr.params.page = page
        jr.params.count_per_page = count_per_page

        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {           
            return resp.data.result.data;
        }
        else
            return undefined;
    }

    async getBlockInformation(height){
        
        let jr = this.getDefaultJson(GET_BLOCK_INFORMATION);
        jr.params.height = height
        
        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {           
            return resp.data.result.data;
        }
        else
            return undefined;
    }

    async getTransactionInformation(tx_id){

        let jr = this.getDefaultJson(GET_TRANSACTION_INFORMATION);
        jr.params.tx_id = tx_id
        
        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {           
            return resp.data.result.data;
        }
        else
            return undefined;
    }

    async searchKeyword(keyword,page, count_per_page){
        let jr = this.getDefaultJson(SEARCH_KEYWORD);
        jr.params.keyword  = keyword 
        jr.params.page = page
        jr.params.count_per_page = count_per_page
        
        let resp = await axInstance.post(JSON_RPC_API_URL,jr);

        if(this.isValidResponse(jr,resp))
        {           
            return resp.data.result.data;
        }
        else
            return undefined;  
    }

};


export default EExplorerApis;