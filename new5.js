JSON data that we receive from the users input:
[
  {
    form_title: string,
    dropdown: {
        number_of_items: 3,
        data: [
          {
            key: string,
            title: string,
            datatype: string,
            options: [
              {
                key: option,
                value: string
              },
              {
                key: option,
                value: string
              },
            ]
          },
          {
            key: number,
            title: string,
            datatype: string
          },
          {
            key: number,
            title: string,
            datatype: string
          }
        ]
    },
    textfield: {
      number_of_items: 0,
      data: []
    },
    textarea: {
      number: 0,
      data: []
    },
    switches: {
      number_of_items: 1,
      data: [
        {
          key: string,
          title: string,
          datatype: boolean
        },
        {
          key: string,
          title: string,
          datatype: boolean
        },
        {
          key: string,
          title: string,
          datatype: boolean
        }
      ]
    },
    radio: {
      number_of_items: 0,
      data: [
        {
          key: string,
          title: string,
          datatype: string,
          options: [
            text1: string,
            text2: string
          ]
        },
        {
          key: number,
          title: string,
          datatype: string
        },
        {
          key: number,
          title: string,
          datatype: string
        }
      ]
    },
  },
]