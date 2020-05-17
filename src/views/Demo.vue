<template>
  <div class="demo ovh">

    <d-section title="Buttons">
      <d-button @click="clickBtn" class="cta" title="CTA">
        CTA
      </d-button>
      <d-button @click="clickBtn" class="primary" title="Primary">
        PRIMARY
      </d-button>
      <d-button @click="clickBtn" class="secondary" title="Secondary">
        SECONDARY
      </d-button>
      <d-button @click="clickBtn" class="inactive" title="Secondary">
        SECONDARY Inactive
      </d-button>
    </d-section>

    <d-section title="Input">
      <d-input
        v-model="user"
        placeholder="USERNAME"
        :validator="validatorUser"
        @focus="focusHandler"
        @input="getVal"
      />
      <div>USERNAME : {{user}}</div>
      <d-input
        @pressEnter="pressEnter"
        @blur="blurHandler"
        v-model="password"
        placeholder="PASSWORD"
        type="password"
        :validator="validatorPwd"
      />
      <div>PASSWORD : {{password}}</div>
      <d-input
        placeholder="READONLY"
        value="readonly"
        :readonly="true"
      />
      <d-input
        placeholder="DISABLED"
        value="disabled"
        :disabled="true"
      />
    </d-section>

    <d-section title="Async check">
      <d-form>
        <d-input
          ref="userInput"
          v-model="form.user"
          placeholder="ACCOUNT"
          :validator="validatorFormUser"
        />
        <div class="btn-box" style="text-align: right">
          <d-button class="cta" @click="asyncCheck">Submit</d-button>
        </div>
      </d-form>
    </d-section>

    <d-section title="Checkbox">
      <d-checkbox v-model="checked" @change="checkboxChange">
        Checked it out
      </d-checkbox>
      <div>checked : {{checked}}</div>
      <d-checkbox v-model="checked2">
        Checked it out
      </d-checkbox>
      <div>checked : {{checked2}}</div>
      <d-checkbox disabled>
        Disabled
      </d-checkbox>
    </d-section>

    <d-section title="Radio">
      <d-radio v-model="checked3" value="Radio">
        Radio
      </d-radio>
      <d-radio v-model="checked3" value="Radio2">
        Radio2
      </d-radio>
      <div>checked : {{checked3}}</div>
    </d-section>

    <d-section title="Select">
      <d-select
        placeholder="Dropdown"
        v-model="checked4"
        :options="options"
        @openChange="openChange"
      />
      <div>selected : {{checked4}}</div>
    </d-section>

    <d-section title="Select">
      <d-select
        placeholder="Dropdown"
        v-model="checked5"
        :options="options"
        @openChange="openChange"
      />
      <div>selected : {{checked5}}</div>
    </d-section>

    <d-section title="InputNumber">
      <d-input-number
        style="width: 290px;"
        placeholder="Default step"
        v-model="count"
      />
      <div>count : {{count}}</div>
      <d-input-number
        style="width: 290px;"
        placeholder="Step 0.1"
        :step="0.1"
        v-model="count2"
      />
      <div>count2 : {{count2}}</div>
      <d-input-number
        style="width: 290px;"
        placeholder="Step 10"
        :step="10"
        v-model="count3"
      />
      <div>count2 : {{count3}}</div>
    </d-section>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      // Input
      user: 'Jake',
      password: '',
      validatorUser: {
        required: true,
        msg: 'Please enter userName'
      },
      validatorPwd: {
        regexp: /^.{4,12}$/,
        required: true,
        msg: 'Please enter 4-12 digit'
      },
      // Checkbox
      checked: true,
      checked2: false,
      // Radio
      checked3: 'Radio',
      // Select
      checked4: 'Select-1',
      checked5: '',
      options: [
        {
          value: 'Select-1',
          label: 'Select 1'
        },
        {
          value: 'Select-2',
          label: 'Select 2',
          disabled: true
        },
        {
          value: 'Select-3',
          label: 'Select 3'
        },
        {
          value: 'Select-4',
          label: 'Select 4'
        },
        {
          value: 'Select-5',
          label: 'Select 5'
        },
        {
          value: 'Select-6',
          label: 'Select 6'
        },
        {
          value: 'Select-7',
          label: 'Select 7'
        },
        {
          value: 'Select-8',
          label: 'Select 8'
        }
      ],
      // InputNumber
      count: 10,
      count2: undefined,
      count3: undefined,
      // Form
      form: {
        user: ''
      },
      validatorFormUser: {
        required: true,
        msg: 'Please enter account'
      }
    }
  },
  methods: {
    // Input
    pressEnter () {
      console.log('按下了回车')
    },
    clickBtn () {
      console.log('点击了按钮')
    },
    focusHandler (e) {
      console.log(e, 'focus')
    },
    blurHandler (e) {
      console.log(e, 'blur')
    },
    getVal (val) {
      console.log(val, 'line 75')
    },
    // Checkbox
    checkboxChange (e) {
      console.log(e)
    },
    // Select
    openChange ({ value, status }) {
      console.log(`value: ${value}, status: ${status}`)
    },
    // Async check
    asyncCheck () {
      if (!this.form.user) {
        this.$refs.userInput.forceCheckFailed()
        return
      }

      const p = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            checkStatus: false,
            msg: 'We couldn’t find this account.'
          })
        }, 1000)
      }, reject => {
        reject()
      })

      p.then(res => {
        this.$refs.userInput.asyncCheck(res.checkStatus, res.msg)
      }).catch()
    }
  }
}
</script>
