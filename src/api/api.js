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

};


export default EExplorerApis;