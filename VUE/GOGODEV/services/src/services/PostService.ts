import { ref, Ref } from "vue";
import IPost from "../interfaces/InterfacePost"

class PostService {
  private posts:Ref<Array<IPost>>;

  constructor(){
    this.posts = ref<Array<IPost>>([])
  }

  getPosts():Ref<Array<IPost>>{
    return this.posts;
  }

  async fetchAll(): Promise<void>{
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const json = await response.json();
        this.posts.value = json;
    } catch (error) {
      console.log(error);
    }
  }
}

export default PostService;