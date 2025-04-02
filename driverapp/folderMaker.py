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
        ("DrivingLicense", "drivingLicense.js"),
        ("ProfilePhoto", "profilePhoto.js"),
        ("AadharCard", "aadharCard.js"),
        ("PANCard", "PandCard.js"),
        ("RegistrationCertificate", "RegistrationCertificate.js"),
        ("VehicleInsurance", "vehicleInsurance.js"),
        ("VehiclePermit", "vehiclePermit.js"),
        ("ApplicationSummary", "ApplicationSumarry.js"),
             ("DocumentRegistry", "DocumentRegistry.js"),
        ("HomeScreen", "Home.js"),
        ("Onboarding", "onboarding.js"),
        ("locationPerm", "locationPermission.js"),
            ("LanguageSelection", "Selection.js"),
        ("Earn", "Earn.js"),
        ("ChooseVehicle", "ChooseVehicle.js"),
        ("DocumentState", "docstate.js"),
             ("Profile", "profile.js"),
        ("Issue", "Issue.js"),
        ("SOS", "sos.js"),
        ("Contact", "contact.js"),
    ]

    # Create folders and files
    for folder_name, file_name in folder_file_pairs:
        create_folder_and_file(folder_name, file_name)