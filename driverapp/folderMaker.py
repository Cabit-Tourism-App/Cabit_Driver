import os

def create_folder_and_file(folder_name, file_name):
    # Create the folder
    try:
        os.makedirs(folder_name, exist_ok=True)  # Create the folder if it doesn't exist
        print(f"Folder '{folder_name}' created or already exists.")
        
        # Create the JavaScript file inside the folder
        file_path = os.path.join(folder_name, file_name)
        with open(file_path, 'w') as js_file:
            js_file.write("// JavaScript file created\n")
            print(f"File '{file_name}' created inside '{folder_name}'.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # List of folder and file names
    folder_file_pairs = [
        ("OTP", "otpPage.js"),
        ("Map", "mapPage.js"),
        ("Ongoing", "Ongoing.js"),
      ("Payment", "PaymentPage.js"),
        ("Completed", "RideCompleted.js"),
    ]

    # Create folders and files
    for folder_name, file_name in folder_file_pairs:
        create_folder_and_file(folder_name, file_name)