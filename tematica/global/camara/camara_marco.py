import cv2
import os

# Cargar marco PNG (con transparencia)
marco = cv2.imread("marco genio.png", cv2.IMREAD_UNCHANGED)

# Inicializar la cámara
camara = cv2.VideoCapture(0)
if not camara.isOpened():
    print("No se pudo acceder a la cámara")
    exit()

print("Presiona 'ESPACIO' para sacar una foto con temporizador, 'q' para salir.")

contador = 1

def aplicar_marco(frame, marco):
    marco_resized = cv2.resize(marco, (frame.shape[1], frame.shape[0]))
    if marco_resized.shape[2] == 4:  # Si tiene canal alfa
        alpha_s = marco_resized[:, :, 3] / 255.0
        alpha_l = 1.0 - alpha_s
        for c in range(0, 3):
            frame[:, :, c] = (alpha_s * marco_resized[:, :, c] +
                              alpha_l * frame[:, :, c])
    return frame

while True:
    ret, frame = camara.read()
    if not ret:
        print("No se pudo leer el frame.")
        break

    # Previsualización en vivo con marco
    frame_con_marco = aplicar_marco(frame.copy(), marco)
    cv2.imshow("Camara en vivo", frame_con_marco)

    tecla = cv2.waitKey(1) & 0xFF

    if tecla == ord(' '):  # Espacio = countdown + foto
        # Countdown
        for i in range(3, 0, -1):
            ret, frame = camara.read()
            if not ret:
                break
            frame_con_marco = aplicar_marco(frame.copy(), marco)
            
            # Texto del countdown centrado
            (h, w) = frame_con_marco.shape[:2]
            texto = str(i)
            tam_texto = cv2.getTextSize(texto, cv2.FONT_HERSHEY_SIMPLEX, 5, 10)[0]
            pos_x = (w - tam_texto[0]) // 2
            pos_y = (h + tam_texto[1]) // 2
            cv2.putText(frame_con_marco, texto, (pos_x, pos_y), cv2.FONT_HERSHEY_SIMPLEX,
                        5, (0, 0, 255), 10, cv2.LINE_AA)
            
            cv2.imshow("Camara en vivo", frame_con_marco)
            cv2.waitKey(1000)

        # Captura final con marco
        ret, frame = camara.read()
        if ret:
            frame_final = aplicar_marco(frame.copy(), marco)

            # Vista previa con overlay
            while True:
                vista = frame_final.copy()
                texto_overlay = "S = Guardar    R = Repetir"
                (h, w) = vista.shape[:2]
                tam_texto = cv2.getTextSize(texto_overlay, cv2.FONT_HERSHEY_SIMPLEX, 1, 2)[0]
                pos_x = (w - tam_texto[0]) // 2
                pos_y = h - 30
                cv2.putText(vista, texto_overlay, (pos_x, pos_y), cv2.FONT_HERSHEY_SIMPLEX,
                            1, (255, 255, 255), 2, cv2.LINE_AA)

                cv2.imshow("Vista previa", vista)
                tecla_preview = cv2.waitKey(1) & 0xFF

                if tecla_preview == ord('s'):  # Guardar definitiva
                    nombre_final = f"foto_{contador}.jpg"
                    cv2.imwrite(nombre_final, vista)
                    print(f"✅ Foto guardada como {nombre_final}")
                    contador += 1
                    break

                elif tecla_preview == ord('r'):  # Repetir
                    print("↩️ Foto descartada, intenta de nuevo.")
                    break

    elif tecla == ord('q'):  # Salir
        break

camara.release()
cv2.destroyAllWindows()
