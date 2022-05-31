<template>
  <div>
    <b-container>
      <v-breadcrumbs :items="items" divider=">" small class="Black">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            v-if="item.disabled"
            :href="item.href"
            :disabled="item.unable"
            ><span class="font-weight-bold" style="color:black"
              ><h3>{{ item.text.toUpperCase() }}</h3></span
            >
          </v-breadcrumbs-item>
          <v-breadcrumbs-item
            v-if="item.active"
            :href="item.href"
            :disabled="item.unable"
            ><span class="font-weight-bold" style="color:#2DAF00"
              ><h3>{{ item.text.toUpperCase() }}</h3></span
            >
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </b-container>

    <v-container>
      <div class="top-section">
        <v-chip
          outlined
          small
          color="cyan darken-3 white--text"
          pill
          class="ma-3"
        >
          <v-icon class="ma-1" small>mdi-domain</v-icon>
          Add Charge
        </v-chip>

        <v-chip
          outlined
          small
          color="cyan darken-3 white--text"
          pill
          class="ma-3"
        >
          <v-icon class="ma-1" small>mdi-domain</v-icon>
          Fuel and EV energy Usage
        </v-chip>

        <v-chip
          outlined
          @click="navigate"
          small
          color="cyan darken-3 white--text"
          pill
          class="ma-3"
        >
          <v-icon class="ma-1" small>mdi-calendar-account</v-icon>
          All Reports
        </v-chip>

        <v-chip
          outlined
          small
          color="cyan darken-3 white--text"
          pill
          class="ma-3"
        >
          <v-icon class="ma-1" small>mdi-domain</v-icon>
          View
        </v-chip>
        <br />

        <v-card-title><h2>EV Charging Beta</h2></v-card-title>
      </div>

      <!-- table View -->
      <div class="#my-table" style="height:100vh;">
        <v-data-table :headers="headers" :items="state" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-spacer></v-spacer>

              <template>
                <v-row align="center" justify="space-around">
                  <v-spacer></v-spacer>
                  <v-btn color="success" button @click="generatePDF"
                    >Generate PDF</v-btn
                  >
                </v-row>
              </template>

              <v-dialog v-model="dialog" max-width="500px">
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
                        ></v-text-field> </v-row
                      ><v-row>
                        <v-text-field
                          v-model="editedItem.revenue"
                          label="Revenue(Rs.)"
                        ></v-text-field> </v-row
                      ><v-row>
                        <v-text-field
                          v-model="editedItem.tariffs"
                          label="Tariff(Rs.)"
                        >
                        </v-text-field>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">Delete </v-card-title>

                  <v-card-title class="text-h10"
                    >Are you sure you want to delete this charge
                    record?</v-card-title
                  >

                  <v-spacer></v-spacer>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </div>
    </v-container>
  </div>
</template>

<script>
import jspdf from "jspdf";
import "jspdf-autotable";

export default {
  data: () => ({
    searchkey: "",
    generatePDF() {
      const doc = new jspdf();

      doc.autoTable({
        head: [["STATE", "CHARGE AMOUNT (RS)", "REVENUE (RS)", "TARRIFS (RS)"]],
        body: [
          [
            "05/14/19 10:45:09 - 14:32:22 (3h 47m 12s)   Awissawella",
            "6.7/kWh",
            "1000",
            "200",
          ],
          [
            "05/14/19 11:24:04 - 14:11:22 (2h 47m 12s)   Dambulla",
            "5/kWh",
            "900",
            "150",
          ],
          [
            "05/15/19 08:27:01 - 10:47:40 (2h 20m 12s)   Anuradhapura",
            "4.70 to 5/Kwh",
            "850",
            "100",
          ],
          [
            "05/16/19 08:27:01 - 10:47:40 (2h 20m 12s)   Nuwaraeliya",
            "6/kWh",
            "950",
            "180",
          ],
          [
            "05/18/19 08:27:01 - 10:47:40 (2h 20m 12s)   Kandy",
            "6/kWh",
            "1500",
            "250",
          ],
          [
            "05/20/19 08:27:01 - 10:47:40 (2h 20m 12s)   Pannipitiya",
            "10/kWh",
            "2000",
            "300",
          ],
        ],
      });

      doc.save("pdf.pdf");
    },

    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "STATE",
        align: "start",
        sortable: false,
        value: "stateA",
      },
      { text: "CHARGE AMOUNT (RS)", value: "chargeAmount" },
      { text: "REVENUE (RS)", value: "revenue" },
      { text: "TARRIFS (RS)", value: "tariffs" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    items: [
      {
        text: "Home",
        disabled: true,
        href: "b",
      },
      {
        text: "Report",
        active: true,
        href: "",
      },
    ],
    state: [],
    editedIndex: -1,
    editedItem: {
      stateA: "",
      chargeAmount: "0",
      revenue: 0,
      tariffs: 0,
    },
    defaultItem: {
      stateA: "",
      chargeAmount: "",
      revenue: 0,
      tariffs: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Charge" : "Edit Charge";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.state = [
        {
          stateA: "05/14/19 10:45:09 - 14:32:22 (3h 47m 12s) - Awissawella",
          chargeAmount: "6.7/kWh",
          revenue: "1000",
          tariffs: "200",
        },

        {
          stateA: "05/14/19 11:24:04 - 14:11:22 (2h 47m 12s) - Dambulla",
          chargeAmount: "5/kWh",
          revenue: "900",
          tariffs: "150",
        },

        {
          stateA: "05/15/19 08:27:01 - 10:47:40 (2h 20m 12s) - Anuradhapura",
          chargeAmount: "4.70 to 5/Kwh",
          revenue: "850",
          tariffs: "100",
        },
        {
          stateA: "05/16/19 08:27:01 - 10:47:40 (2h 20m 12s) - Nuwaraeliya",
          chargeAmount: "6/kWh",
          revenue: "950",
          tariffs: "180",
        },

        {
          stateA: "05/18/19 08:27:01 - 10:47:40 (2h 20m 12s) - Kandy",
          chargeAmount: "8/kWh",
          revenue: "1500",
          tariffs: "250",
        },

        {
          stateA: "05/20/19 08:27:01 - 10:47:40 (2h 20m 12s) - Pannipitiya",
          chargeAmount: "10/kWh",
          revenue: "2000",
          tariffs: "300",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.state.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.state.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.state.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.state[this.editedIndex], this.editedItem);
      } else {
        this.state.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
.myTable {
  overflow-y: hidden;
}
</style>
