<template>
    <div>
        covid components
        <!-- <button @click="getCovidData">123</button> -->
    </div>
</template>
<script>
export default {
    name:'CovidTracker',
    data(){
        return{
            covidData:[]   
             }
    },
    
    methods:{
        //  async getCovidData(){
        //     const res =  await fetch('https://api.covid19api.com/summary')
        //     console.log(res.json())
        //     // const data =  res.json()
        //     // return data
        // }
    },
    created(){
        fetch('https://api.covid19api.com/summary').then(
            res => res.json()
        ).then(
            data => {
                this.covidData = data
                console.log(data);
            }
        )

        // const data = this.getCovidData()
        // console.log(data);
        // const data = await this.getCovidData()
        // console.log(data);
        // console.log(this.getCovidData());
        }
}
</script>