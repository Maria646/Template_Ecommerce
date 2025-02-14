<template>
    <div>
        <h2>Paiment<h2>
            <form>
                <div for="use from useFormState">
                    <img :src="use.image" alt="Card image cap">
                    <h3>{{use.nom}}</h3>
                    <h3>{{use.prix}}</h3>
                </div>
                <input type="number" id="age" min="18" max="100" step="1" 
                v-model="ajoutArticle">
                <p>{{a()}}</p>
                <button @click="submitForm">Submit</button>
            </form>
    </div>
</template>
<script setup>
    import { ref, reactive, OnMounted } from 'vue';
    import useRouter from 'vue-router';
    import composable from 'vue-composable';
    
    const { useFormState } = composable();

    let ajoutArticle = ref('');

    const a = () computed =>{
        useFormState.price * ajoutArticle  
    }
    
    const route = useRouter();

    const idParam = route.param.id;

    OnMounted(){
        composable(idParam);
    }
</script>