members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'Charlie',
        lname: 'Watts',
        instrument: 'Drums'
    }
]

const handlingForms = {
    data(){
        return{
            members: window.members, 
            newMember:{}

        }
    },

    methods: {
        addMember: function(){
            // Vérifier si les champs sont complétés
            if(this.newMember.fname && this.newMember.lname && this.newMember.instrument){
                this.members.push(this.newMember);
                this.newMember = {};
            }else{
                alert('Remplissez tout les champs');
            }
            
        }
    }
};

Vue.createApp(handlingForms).mount('#app');
