// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


/* eslint-disable no-new */


class Post{
  constructor(title,link,author,img){
    this.title= title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}
const app = new Vue({
  el:'#app',
  data:{
    keyword: '',
    postList: [
      new Post(
        'Asura', 
        'https://www.youtube.com/watch?v=rYdPiinHWdk', 
        'Soguns Lament', 
        'https://hydra-media.cursecdn.com/bladeandsoul.gamepedia.com/a/ad/Shura_full.png?version=b8d294cabebf25b351580d6c735872b3'
      ),
      new Post(
        'Dragon', 
        'https://www.youtube.com/watch?v=DRlsKTBhg-A', 
        'Ebondrake Citadel',
        'http://www.bladeandsoul.com.pl/wp-content/uploads/2016/10/ebondrake-soul-shield.png'
      ),
       new Post(
        'Wolf God', 
        'https://www.youtube.com/watch?v=24UOEeVKAX8', 
        'Hooked Canyon',
        'http://static.plaync.co.kr/powerbook/bns/ui_resource/set-item/Item_Set_0254.png'
      ),
]
    
  },
  methods:{
    toggleOnOff(){
      this.onOff=!this.onOff;
    }
  },
  computed:{
    filterList(){
      return this.postList.filter((post) =>{
        return post.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }
  }
});