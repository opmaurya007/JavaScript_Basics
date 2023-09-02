const user={
    username:"op",price:399,
    welComeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welComeMessage();
user.username="sam";
user.welComeMessage();
