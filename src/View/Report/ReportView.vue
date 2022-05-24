<template>
<v-container>
 <div class="top-section">
      <h2>Charge Amount,Revenue and Tariffs in available Charges</h2>
      <v-row>
        <v-col cols="9">
          <div class="mt-5 search-bar" style="width:50%">
               <v-text-field
               v-model="searchKey"
             prepend-inner-icon="mdi-account-search"
            label="Search Charging State"
            solo
          ></v-text-field>
          </div>
        </v-col>
        <v-col>
          <v-btn color="success" button @click="generatePDF">Generate PDF</v-btn>
        </v-col>
      </v-row>
    </div>

  <!-- table View -->
  <div class="#my-table" style="height:100vh;">
  <v-data-table
    :headers="headers"
    :items="state"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
       
        <v-spacer></v-spacer>
    
        <template>
          <v-row
          align="center"
          justify="space-around"
            >

          <v-spacer></v-spacer>
         <v-btn to='/addstudent' color="primary">Add New Charge</v-btn>
        
          </v-row>
        </template>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                 
                    <v-text-field
                      v-model="editedItem.stateA"
                      label="State"
                    ></v-text-field>
                </v-row>
                <v-row>
                  
                 
                    <v-text-field
                      v-model="editedItem.chargeAmount"
                      label="Charge Amount (Kwh)"
                    ></v-text-field>
                </v-row><v-row>
                  
                    <v-text-field
                      v-model="editedItem.revenue"
                      label="Revenue(Rs.)"
                    ></v-text-field>

                </v-row><v-row>
                    <v-text-field
                      v-model="editedItem.tariffs"
                      label="Tariff(Rs.)">
                      </v-text-field> 
                  </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>

            
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
             <v-card-title class="text-h5">Delete </v-card-title>
             
            <v-card-title class="text-h10">Are you sure you want to delete this charge record?</v-card-title>

            <v-spacer></v-spacer>
          
            <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
      
        </v-dialog>
      </v-toolbar>
    </template>
        <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>


 </div>
 </v-container>
</template>

<script>
import jspdf from 'jspdf';
import 'jspdf-autotable';
import imgs from '../../../public/logo.png'
  export default {
    data: () => ({
      searchkey: "",
       generatePDF(){
        //  <v-btn to='/studentView' color="#000000">Back</v-btn>
        const doc = new jspdf({
          orientation: "portrait",
          unit: "in",
          format: "letter",
        });

        var img = new Image();
        img.src = imgs;

        doc.addImage(img, "png", 1.0, 0.01, 1.0, 1.1);
        doc.setFontSize(10).text("Sales Report Section", 2.5, 0.4);
        doc.setFontSize(10).text("HRM Company (PVT)", 2.5, 0.6);
        doc.setFontSize(10).text("Colombo 7", 2.5, 0.8);
        doc.setFontSize(10).text("0932232233", 2.5, 1.0);

        doc.setFontSize(16).text("HRM System Report", 4.5, 1.0);
        doc.setFontSize(10).text("REF NO  : ", 7.3, 1.0);
        doc.setFontSize(10).text("1221", 8.0, 1.0);


        doc
          .setFontSize(10)
          .text(`Dowloaded Date ${new Date().toLocaleDateString()}`, 5.0, 2.0);

        doc.setLineWidth(0.01).line(0.05, 1.1, 8.0, 1.1);
      
      
        doc.autoTable({

          head :[['STATE','CHARGE AMOUNT','REVENUE (RS)','TARIFFS']],
          body:[
            ['Awissawella','6.7/kWh','1000','200'],
            ['Dambulla','5/kWh','900','150'],
            ['ANURADHAPURA','4.70 to 5/kWh','850','100'],
            ['NUWARAELIYA','6/kWh','950','180'],
            ['KANDY','8/kWh','1500','250'],
            ['PANNIPITIYA','10/kWh','2000','300'],
        
          ],
        
        })
        
        doc.save("pdf.pdf")
        
      },
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'STATE',
          align: 'start',
          sortable: false,
          value: 'stateA',
        },
        { text: 'CHARGEAMOUNT (RS)', value: 'chargeAmount' },
        { text: 'REVENUE (RS)', value: 'revenue' },
        { text: 'TARRIFS (RS)', value: 'tariffs' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      state: [],
      editedIndex: -1,
      editedItem: {
        stateA:'',
        chargeAmount: '0',
        revenue: 0,
        tariffs: 0,
      
      },
      defaultItem: {
        stateA:'',
        chargeAmount: '',
        revenue: 0,
        tariffs: 0, 
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Charge' : 'Edit Charge'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.state = [
          {
           stateA:'Awissawella',
           chargeAmount: '6.7/kWh',
           revenue: '1000',
           tariffs: '200', 
          },

          {
           stateA:'Dambulla',
           chargeAmount: '5/kWh',
           revenue: '900',
           tariffs: '150', 
          },
        
          {
           stateA:'Anuradhapura',
           chargeAmount: '4.70 to 5/Kwh',
           revenue: '850',
           tariffs: '100', 
          },
           {
           stateA:'Nuwaraeliya',
           chargeAmount: '6/kWh',
           revenue: '950',
           tariffs: '180', 
          },

          {
           stateA:'Kandy',
           chargeAmount: '8/kWh',
           revenue: '1500',
           tariffs: '250', 
          },

           {
           stateA:'Pannipitiya',
           chargeAmount: '10/kWh',
           revenue: '2000',
           tariffs: '300', 
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.state.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.state.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.state.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.state[this.editedIndex], this.editedItem)
        } else {
          this.state.push(this.editedItem)
        }
        this.close()
      },
      
        
    },
    
    }

  
</script>

<style>
.myTable{
  overflow-y: hidden;
}
</style>