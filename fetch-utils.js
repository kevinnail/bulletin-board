const SUPABASE_URL = 'https://lmxgwefcojhyudouhfdi.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxteGd3ZWZjb2poeXVkb3VoZmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0MTE4NjAsImV4cCI6MTk3OTk4Nzg2MH0.sJ2d3kgfQnCLcAr9C7ybkPsuB6wHrKD1cv_Dva8hdqI';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Storage Functions */
/* Data functions */
export async function uploadImage(bucketName, imagePath, imageFile) {
    const bucket = client.storage.from(bucket);
    const response = await bucket.upload(imagePath, imageFile, {
        cacheControl: '3600',
        upsert: true,
    });

    if (response.error) {
        console.log('upload image error ' + response);
        return null;
    }
    const url = `${SUPABASE_URL}/storage/v1/object/public/project-images/bulletin/${response.data.Key}`;
    return url;
}

// https://lmxgwefcojhyudouhfdi.supabase.co/storage/v1/object/public/project-images/bulletin/meDrums.jpg
