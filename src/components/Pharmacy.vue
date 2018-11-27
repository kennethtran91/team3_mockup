<template>
    <div id="pharm">
        <h1>Pharmacist Area</h1>
    <section>
        <b-tabs>
            <b-tab-item label="Table">
                <b-table
                    :data="data"
                    :columns="columns"
                    :selected.sync="selected"
                    focusable>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Selected">
                <pre>
                    <h2>Patient Name: {{selected.first_name}} {{selected.last_name}}</h2>
                    <h2>Medication: {{selected.medication}}</h2>
                    <h1>Note: </h1>{{selected.first_name}} {{selected.report}}
                </pre>
            </b-tab-item>
        </b-tabs>
        <button class="button field is-danger" @click="selected = null"
            :disabled="!selected">
            <span>Clear selected</span>
        </button>
    </section>
    </div>
</template>

<script>
    export default {
        name: 'Pharmacy',
        data() {
            const data = require('@/assets/sampledata.json')
            return {
                data,
                selected: data[1],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #pharm {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin: auto;
        width: 80%;
        margin-top: 10px;
    }
</style>