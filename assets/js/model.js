class playlist{
    constructor(song_id , song_name , song_url, song_img , song_p){
        this.id = song_id;
        this.name = song_name;
        this.url = song_url;
        this.img = song_img; 
        this.place = song_p;
    }
}

var playlist_song = {
    my_play_list : [],
    addsong : function(id,name,url,img ,place) {
         var obj_1 = new playlist(id,name,url,img,place);
         this.my_play_list.push(obj_1);
        //  console.log(this.my_play_list);
    },
    delete : function(name) {
        // this.my_play_list = this.my_play_list.filter(function(obj){
        //     return obj.id != id;
        // });
        this.my_play_list = this.my_play_list.filter(function(obj) {
            return obj.name != name ;
        })
    },

}