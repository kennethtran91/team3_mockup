<template>
  <div id="doc">
    <h1>Doctor Area</h1><br />
    <div id="app" class="container">
      
      <section>
        <Drug /> <br />
        <b-table :data="data" paginated per-page="5" :opened-detailed="defaultOpenedDetails" detailed detail-key="id"
          @details-open="(row, index) => $toast.open(`Expanded ${row.first_name}`)">

          <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" numeric>
              {{ props.row.id }}
            </b-table-column>

            <b-table-column field="user.first_name" label="First Name" sortable>
              {{ props.row.first_name }}
            </b-table-column>

            <b-table-column field="user.last_name" label="Last Name" sortable>
              {{ props.row.last_name }}
            </b-table-column>

            <b-table-column field="date" label="Date" sortable centered>
              <span class="tag is-success">
                {{ new Date(props.row.date).toLocaleDateString() }}
              </span>
            </b-table-column>

            <b-table-column label="Gender">
              <b-icon pack="fa" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
              </b-icon>
              {{ props.row.gender }}
            </b-table-column>
          </template>

          <template slot="detail" slot-scope="props">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img src="../assets/placeholder-128x128.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ props.row.first_name }} {{ props.row.last_name }}</strong>
                    <br>
                    {{props.row.first_name}} is taking {{props.row.medication}} <br />
                    <br />
                    <b-field label="Doctor Note to Pharmacist">
                      <b-input maxlength="100" type="textarea"></b-input>
                    </b-field>
                    <button class="button field is-primary">
                      <span>Submit Note</span>
                    </button>
                  </p>
                </div>
              </div>
            </article>
          </template>
        </b-table>

      </section>

    </div>

  </div>
</template>

<script>
import Drug from '@/components/Drug'

    export default {
      name: 'Doctor',
      components: { Drug },
      data() {
        const data = require('@/assets/sampledata.json')
        return {
          data,
          defaultOpenedDetails: [0],
        }
      }
    }
</script>

<style scoped>
    #doc {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin: auto;
        width: 80%;
        margin-top: 10px;
    }
</style>