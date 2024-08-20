import { ref, Ref } from "vue";
import IPost from "../interfaces/IPost";

class PostServices {
  private post: Ref<IPost>;
  private posts: Ref<Array<IPost>>;
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor() {
    this.post = ref<IPost>({});
    this.posts = ref<Array<IPost>>([]);
  }

  getPost(): Ref<IPost> {
    return this.post;
  }

  getPosts(): Ref<Array<IPost>> {
    return this.posts;
  }

  async fetchAll(): Promise<void> {
    try {
      const response = await fetch(this.url);
      const json = await response.json();
      this.posts.value = await json;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchById(id: string | Array<string>): Promise<void> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      const json = await response.json();
      this.post.value = await json;
    } catch (error) {
      console.log(error);
    }
  }
}

export default PostServices;
