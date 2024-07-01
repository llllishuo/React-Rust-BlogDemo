import axios from 'axios';
export async function get_article_list_by_user_id(user_id){ 

    let get = await axios.get('http://127.0.0.1:8000/article/list/'+ user_id);
    return get.data;
}  
export async function get_article_by_id(id){ 
    let get = await axios.get('http://127.0.0.1:8000/article/'+ id);
    return get.data;
}  
