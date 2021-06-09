<template>
    <div>
        <div class="text-center">
            <h1 class="text-center">All mesures</h1>
        </div>
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center" v-for="col of columns" :key="col.field">{{col.header}}</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 text-center">
                                <tr v-for="dt of data" :key="dt.received_at">
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.identifier }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.namespace }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.hostname }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.over }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.name }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.value }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.receptionDelay }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ dt.protocolDelay }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {all, notSeen} from "../../services/DataService.js"

export default {
    name: "A",
    data(){
        return {
            columns: [
                {field: 'identifier', header: 'Opcua Identifier'},
                {field: 'namespace', header: 'Opcua Namespace'},
                {field: 'hostname', header: 'Source Node'},
                {field: 'over', header: 'Source interface'},
                {field: 'name', header: 'Name'},
                {field: 'value', header: 'Value (Boolean)'},
                {field: 'receptionDelay', header: 'Reception Delay (micro seconds)'},
                {field: 'protocolDelay', header: 'Protocol Delay (micro seconds)'}
            ],
            data: []
        }
    },
    methods: {
        loadData(){
            all().then(data => this.data = data);
        },
        lazyLoadData(){
            notSeen().then(data => {
                for(let i = 0; i<data.length; i++){
                    let dt = data[i]
                    if (this.data.find(data => {return data.received_at == dt.received_at && data.identifier == dt.identifier && data.hostname == dt.hostname}) == undefined){
                        this.data.push(data[i]);
                    }
                }
            });
        }
    },
    mounted(){
        this.loadData();
        window.setInterval(() => this.lazyLoadData(), 1000);
    }
}
</script>