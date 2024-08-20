import { ref, Ref } from "vue";
import IPost from "../interfaces/InterfacePost"

class PostService {
  private posts:Ref<Array<IPost>>;
  private post:Ref<IPost>;

  constructor(){
    this.posts = ref<Array<IPost>>([])
    this.post = ref<IPost>({})
  }

  getPosts():Ref<Array<IPost>>{
    return this.posts;
  }

  getPost():Ref<IPost>{
    return this.post;
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

  async fetchPost(id:number): Promise<void>{
    try {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const response = await fetch(url);
        const json = await response.json();
        this.posts.value = json;
    } catch (error) {
      console.log(error);
    }
  }
}

export default PostService;