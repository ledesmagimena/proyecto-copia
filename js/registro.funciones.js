export function registroHTML() {
  const main = document.querySelector("#main");
  const contenidoForm = document.createElement("div");
  contenidoForm.innerHTML = `
<div>
      <form action="" class="formulario" id="formulario">
      <!-- Grupo: Nombre -->
      <div class="formulario__grupo" id="grupo__nombre">
      <label for="nombre" class="formulario__label">Nombre</label>
      <div class="formulario__grupo-input">
      <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="gime123">
      <i class="formulario__validacion-estado fas fa-times-circle"></i>
      </div>
      <p class="formulario__input-error">El usuario tiene que ser de 8 a 30 dígitos y solo puede contener numeros, letras y guion bajo.</p>
      </div>
        <!-- Grupo: Correo Electronico -->
        <div class="formulario__grupo" id="grupo__correo">
          <label for="correo" class="formulario__label"
            >Correo Electrónico</label
          >
          <div class="formulario__grupo-input">
            <input
              type="email"
              class="formulario__input"
              name="correo"
              id="correo"
              placeholder="correo@correo.com"
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            El email tiene que ser de 8 a 30 dígitos y solo puede contener
            letras, numeros, puntos,guiones y guion bajo.
          </p>
        </div>
        <!-- Grupo: Contraseña -->
        <div class="formulario__grupo" id="grupo__password">
          <label for="password" class="formulario__label">Contraseña</label>
          <div class="formulario__grupo-input">
            <input
              type="password"
              class="formulario__input"
              name="password"
              id="password"
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            La contraseña tiene que ser de 8 a 30 dígitos.
          </p>
        </div>

        <!-- Grupo: Contraseña 2 -->
        <div class="formulario__grupo" id="grupo__password2">
          <label for="password2" class="formulario__label"
            >Repetir Contraseña</label
          >
          <div class="formulario__grupo-input">
            <input
              type="password"
              class="formulario__input"
              name="password2"
              id="password2"
            />
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
          </div>
          <p class="formulario__input-error">
            Ambas contraseñas deben ser iguales.
          </p>
        </div>
        <!-- Grupo: Terminos y Condiciones -->
        <div class="formulario__grupo" id="grupo__terminos">
          <label class="formulario__label">
            <input
              class="formulario__checkbox"
              type="checkbox"
              name="terminos"
              id="terminos"
            />
            Acepto los Terminos y Condiciones
          </label>
        </div>

        <div class="formulario__mensaje" id="formulario__mensaje">
          <p class="error">
            <i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor
            rellena el formulario correctamente.
          </p>
        </div>

        <div class="formulario__grupo formulario__grupo-btn-enviar">
          <button type="submit" class="formulario__btn">Enviar</button>
          <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">
            Formulario enviado exitosamente!
          </p>
        </div>
      </form>
      </div>
`;
  main.appendChild(contenidoForm);
}
