<template>
  <modal name="demo-tutor" transition="pop-out" :width="modalWidth" :height="400">
    <div class="box">
      <div class="box-part" id="bp-left">
        <div class="partition" id="partition-register">
          <div class="partition-title">María José Manrique</div>
          <p class="partition-text">
            María José es un comerciante de Opciones Financieras y Stocks a tiempo completo. Es
            mentor y fundadora de Traders Planet. Su estilo de negociación está profundamente
            arraigado al análisis técnico y a seguir el flujo de las opciones institucionales. Es una
            comerciante de swing trading por naturaleza, pero también realiza day trading
            dependiendo de las condiciones del mercado.
          </p>
        </div>
      </div>
      <div class="box-part" id="bp-right" :style="cssImage">
        <div class="box-messages"></div>
      </div>
    </div>
  </modal>
</template>
<script>
const MODAL_WIDTH = 656;

export default {
  name: "DemoTutorModal",
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      cssImage: `background: url('img/tutors/foto_mari_verde.jpg') no-repeat top left; background-size: 100%;`,
      testimony: {
        name: "",
        content: ""
      }
    };
  },
  created() {
    this.modalWidth =
      window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
  },
  methods: {
    async saveTestimony() {
      try {
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scope>
$background_color: #404142;
$github_color: #dba226;
$facebook_color: #03d88d;

.box {
  background: rgb(255, 255, 255);
  overflow: hidden;
  width: 656px;
  height: 400px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  font-family: "Poppins", sans-serif;
  color: #4f4f4f;
  font-size: 0;

  .box-part {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    height: 100%;
    width: 50%;

    &#bp-right {
      border-left: 1px solid #eee;
    }
  }

  .box-messages {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .box-error-message {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;

    height: 0;
    line-height: 32px;
    padding: 0 12px;
    text-align: center;
    width: 100%;
    font-size: 11px;
    color: white;
    background: #f38181;
  }

  .partition {
    width: 100%;
    height: 100%;

    .partition-title {
      box-sizing: border-box;
      padding: 15px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: 300;
    }

    .partition-text {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      text-align: justify;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 400;
    }

    .partition-form {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }

  input[type="password"],
  input[type="text"] {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #03d88d;
    padding: 4px 8px;
    font-family: "Poppins", sans-serif;
    transition: 0.5s all;
    outline: none;
  }

  textarea {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #03d88d;
    padding: 4px 8px;
    font-family: "Poppins", sans-serif;
    transition: 0.5s all;
    outline: none;
  }

  button {
    background: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    min-width: 140px;
    margin-top: 8px;
    color: #8b8c8d;
    cursor: pointer;
    border: 1px solid #dddedf;
    text-transform: uppercase;
    transition: 0.1s all;
    font-size: 10px;
    outline: none;
    &:hover {
      border-color: mix(#dddedf, black, 90%);
      color: mix(#8b8c8d, black, 80%);
    }
  }

  .large-btn {
    width: 100%;
    background: white;

    span {
      font-weight: 600;
    }
    &:hover {
      color: white !important;
    }
  }

  .button-set {
    margin-bottom: 8px;
  }

  #register-btn,
  #signin-btn {
    margin-left: 8px;
  }

  .facebook-btn {
    border-color: $facebook_color;
    color: $facebook_color;
    &:hover {
      border-color: $facebook_color;
      background: $facebook_color;
    }
  }

  .github-btn {
    border-color: $github_color;
    color: $github_color;
    &:hover {
      border-color: $github_color;
      background: $github_color;
    }
  }

  .autocomplete-fix {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
  }
}

.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>
